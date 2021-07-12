// DEBUG
const trace = (msg) => { console.log(msg) }

let displayObj

const pageLoad_init = () =>
{
	trace("pageLoad_init()")
}

const build_home = () =>
{
	displayObj = {}
	
	attach_nav()
	attach_footer()
}

const attach_nav = () =>
{
	displayObj.nav_menu_btn = document.querySelector(".sk-nav-menu")
	enable_nav()
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
			trace("CLICK")
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