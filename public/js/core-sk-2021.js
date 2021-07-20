// DEBUG
const trace = (msg) => { console.log(msg) }

let displayObj

let navOpen = false

let useFullNav = false


const pageLoad_init = () =>
{
	trace("pageLoad_init()")
}

const build_home = (fullNav) =>
{
	if(fullNav)
	{
		useFullNav = true
	}

	displayObj = {}
	
	displayObj.pageWrapper = document.querySelector(".sk-wrap")

	attach_nav()
	attach_footer()
}

const attach_nav = () =>
{
	// CONTAINERS
	displayObj.nav_wrap = document.querySelector(".sk-nav-wrap")
	displayObj.nav_extended = document.querySelector(".sk-nav-wrap .sk-nav-extended") 

	displayObj.nav_extended.innerHTML = html_extended_nav

	// BUTTONS
	displayObj.nav_menu_btn = document.querySelector(".sk-nav .sk-nav-menu")
	displayObj.nav_menu_btn_extended = document.querySelector(".sk-nav-wrap .sk-nav-extended .sk-nav-menu")

	if(useFullNav)
	{
		displayObj.nav_menu_back_btn = document.querySelector(".sk-nav-back .sk-nav-back-btn")

		displayObj.nav_menu_back_btn.classList.remove("sk-nav-back-btn-default")

		enable_nav_back()

		extend_nav_links()
	}

	enable_nav()
	enable_nav_extended()
}

const extend_nav_links = () =>
{
	displayObj.nav_list = document.querySelectorAll(".sk-nav-wrap .sk-nav-extended .sk-nav-content-links a")

	for(let i = 0; i < displayObj.nav_list.length; i++)
	{
		let ext_url = "../" + displayObj.nav_list[i].getAttribute("href")
		displayObj.nav_list[i].setAttribute("href", ext_url)
	}
}

const enable_nav = () =>
{
	displayObj.nav_menu_btn.addEventListener("mouseover", events_nav, false)
	displayObj.nav_menu_btn.addEventListener("mouseout", events_nav, false)
	displayObj.nav_menu_btn.addEventListener("click", events_nav, false)
}

const events_nav = (event) =>
{
	event.preventDefault()

	let exitFrame
	let show

	switch(event.type)
	{
		case "mouseover":
		{
			displayObj.nav_menu_btn.classList.add("sk-nav-menu-over")
			
			break
		}

		case "mouseout":
		{
			displayObj.nav_menu_btn.classList.remove("sk-nav-menu-over")
			
			break
		}

		case "click":
		{
			if(!navOpen)
			{
				navOpen = true

				displayObj.nav_wrap.classList.add("sk-nav-wrap-show")
				exitFrame = setTimeout(() => {displayObj.nav_wrap.style.opacity = 1}, 60)
				show = setTimeout(() => {displayObj.nav_extended.style.opacity = 1}, 500)
			}
			
			break
		}

		default:
		{

		}
	}
}

const enable_nav_extended = () =>
{
	displayObj.nav_menu_btn_extended.addEventListener("mouseover", events_nav_extended, false)
	displayObj.nav_menu_btn_extended.addEventListener("mouseout", events_nav_extended, false)
	displayObj.nav_menu_btn_extended.addEventListener("click", events_nav_extended, false)
}

const events_nav_extended = (event) =>
{
	event.preventDefault()

	switch(event.type)
	{
		case "mouseover":
		{
			displayObj.nav_menu_btn_extended.classList.add("sk-nav-menu-over-extended")

			break
		}

		case "mouseout":
		{
			displayObj.nav_menu_btn_extended.classList.remove("sk-nav-menu-over-extended")

			break
		}

		case "click":
		{
			displayObj.nav_wrap.addEventListener("transitionend", clean_nav, false)
			displayObj.nav_wrap.style.opacity = 0
			
			break
		}

		default:
		{

		}
	}
}

const clean_nav = (event) =>
{
	navOpen = false

	if(event.propertyName === "opacity")
	{
		displayObj.nav_wrap.classList.remove("sk-nav-wrap-show")
		displayObj.nav_wrap.removeEventListener("transitionend", clean_nav, false)
	}
}

const enable_nav_back = () =>
{
	displayObj.nav_menu_back_btn.addEventListener("mouseover", events_nav_back, false)
	displayObj.nav_menu_back_btn.addEventListener("mouseout", events_nav_back, false)
	displayObj.nav_menu_back_btn.addEventListener("click", events_nav_back, false)
}

const events_nav_back = (event) =>
{
	event.preventDefault()

	switch(event.type)
	{
		case "mouseover":
		{
			displayObj.nav_menu_back_btn.classList.add("sk-nav-menu-over")
			
			break
		}

		case "mouseout":
		{
			displayObj.nav_menu_back_btn.classList.remove("sk-nav-menu-over")
			
			break
		}

		case "click":
		{
			window.history.back();

			break
		}

		default:
		{

		}
	}
}

const attach_footer = () =>
{
	displayObj.footer = document.querySelector(".sk-footer")
	displayObj.footer.innerHTML = html_footer
}


