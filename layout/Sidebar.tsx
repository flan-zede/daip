import * as Icon from 'react-feather'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Link href="#" className="sidebar-brand">Noble<span>UI</span></Link>
        <div className='sidebar-toggler not-active'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <Link href="/" className="nav-link"><Icon.Box className="link-icon" /> <span className="link-title">Dashboard</span></Link>
          </li>
          <li className="nav-item nav-category">web apps</li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
              <Icon.Mail className="link-icon" /><span className="link-title">Email</span><Icon.ChevronDown className="link-arrow" />
            </Link>
            <div className="collapse" id="emails">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/email/inbox.html" className="nav-link">Inbox</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/email/read.html" className="nav-link">Read</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/email/compose.html" className="nav-link">Compose</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link href="pages/apps/chat.html" className="nav-link">
              <Icon.MessageSquare className="link-icon" /><span className="link-title">Chat</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="pages/apps/calendar.html" className="nav-link">
              <Icon.Calendar className="link-icon" /><span className="link-title">Calendar</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Components</li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
              <Icon.Feather className="link-icon" /><span className="link-title">UI Kit</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="uiComponents">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="accordion.html" className="nav-link">Accordion</Link>
                </li>
                <li className="nav-item">
                  <Link href="alerts.html" className="nav-link">Alerts</Link>
                </li>
                <li className="nav-item">
                  <Link href="badges.html" className="nav-link">Badges</Link>
                </li>
                <li className="nav-item">
                  <Link href="breadcrumbs.html" className="nav-link">Breadcrumbs</Link>
                </li>
                <li className="nav-item">
                  <Link href="buttons.html" className="nav-link">Buttons</Link>
                </li>
                <li className="nav-item">
                  <Link href="button-group.html" className="nav-link">Button group</Link>
                </li>
                <li className="nav-item">
                  <Link href="cards.html" className="nav-link">Cards</Link>
                </li>
                <li className="nav-item">
                  <Link href="carousel.html" className="nav-link">Carousel</Link>
                </li>
                <li className="nav-item">
                  <Link href="collapse.html" className="nav-link">Collapse</Link>
                </li>
                <li className="nav-item">
                  <Link href="dropdowns.html" className="nav-link">Dropdowns</Link>
                </li>
                <li className="nav-item">
                  <Link href="list-group.html" className="nav-link">List group</Link>
                </li>
                <li className="nav-item">
                  <Link href="media-object.html" className="nav-link">Media object</Link>
                </li>
                <li className="nav-item">
                  <Link href="modal.html" className="nav-link">Modal</Link>
                </li>
                <li className="nav-item">
                  <Link href="navs.html" className="nav-link">Navs</Link>
                </li>
                <li className="nav-item">
                  <Link href="navbar.html" className="nav-link">Navbar</Link>
                </li>
                <li className="nav-item">
                  <Link href="pagination.html" className="nav-link">Pagination</Link>
                </li>
                <li className="nav-item">
                  <Link href="popover.html" className="nav-link">Popovers</Link>
                </li>
                <li className="nav-item">
                  <Link href="progress.html" className="nav-link">Progress</Link>
                </li>
                <li className="nav-item">
                  <Link href="scrollbar.html" className="nav-link">Scrollbar</Link>
                </li>
                <li className="nav-item">
                  <Link href="scrollspy.html" className="nav-link">Scrollspy</Link>
                </li>
                <li className="nav-item">
                  <Link href="spinners.html" className="nav-link">Spinners</Link>
                </li>
                <li className="nav-item">
                  <Link href="tabs.html" className="nav-link">Tabs</Link>
                </li>
                <li className="nav-item">
                  <Link href="tooltips.html" className="nav-link">Tooltips</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
              <Icon.Anchor className="link-icon" /><span className="link-title">Advanced UI</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="advancedUI">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/advanced-ui/cropper.html" className="nav-link">Cropper</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/advanced-ui/owl-carousel.html" className="nav-link">Owl carousel</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/advanced-ui/sortablejs.html" className="nav-link">SortableJs</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/advanced-ui/sweet-alert.html" className="nav-link">Sweet Alert</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
              <Icon.Inbox className="link-icon" /><span className="link-title">Forms</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="forms">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/forms/basic-elements.html" className="nav-link">Basic Elements</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/forms/advanced-elements.html" className="nav-link">Advanced Elements</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/forms/editors.html" className="nav-link">Editors</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/forms/wizard.html" className="nav-link">Wizard</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
              <Icon.PieChart className="link-icon" /><span className="link-title">Charts</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="charts">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/charts/apex.html" className="nav-link">Apex</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/charts/chartjs.html" className="nav-link">ChartJs</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/charts/flot.html" className="nav-link">Flot</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/charts/peity.html" className="nav-link">Peity</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/charts/sparkline.html" className="nav-link">Sparkline</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
              <Icon.Layout className="link-icon" /><span className="link-title">Table</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="tables">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/tables/basic-table.html" className="nav-link">Basic Tables</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/tables/data-table.html" className="nav-link">Data Table</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
              <Icon.Smile className="link-icon" /><span className="link-title">Icons</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="icons">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/icons/feather-icons.html" className="nav-link">Feather Icons</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/icons/flag-icons.html" className="nav-link">Flag Icons</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/icons/mdi-icons.html" className="nav-link">Mdi Icons</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Pages</li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
              <Icon.Book className="link-icon" /><span className="link-title">Special pages</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="general-pages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/general/blank-page.html" className="nav-link">Blank page</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/general/faq.html" className="nav-link">Faq</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/general/invoice.html" className="nav-link">Invoice</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/general/profile.html" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/general/pricing.html" className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/general/timeline.html" className="nav-link">Timeline</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
              <Icon.Unlock className="link-icon" /><span className="link-title">Authentication</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="authPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/auth/login.html" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/auth/register.html" className="nav-link">Register</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
              <Icon.CloudOff className="link-icon" /><span className="link-title">Error</span><Icon.ChevronDown className="link-icon" />
            </Link>
            <div className="collapse" id="errorPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <Link href="pages/error/404.html" className="nav-link">404</Link>
                </li>
                <li className="nav-item">
                  <Link href="pages/error/500.html" className="nav-link">500</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Docs</li>
          <li className="nav-item">
            <Link href="https://www.nobleui.com/html/documentation/docs.html" target="_blank" className="nav-link">
              <Icon.Hash className="link-icon" /><span className="link-title">Documentation</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
