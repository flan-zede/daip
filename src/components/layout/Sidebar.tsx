import * as Icon from 'react-feather';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">Noble<span>UI</span></a>
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
            <a href="/" className="nav-link"><Icon.Box className="link-icon" /> <span className="link-title">Dashboard</span></a>
          </li>
          <li className="nav-item nav-category">web apps</li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
              <Icon.Mail className="link-icon" /><span className="link-title">Email</span><Icon.ChevronDown className="link-arrow" />
            </a>
            <div className="collapse" id="emails">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/email/inbox.html" className="nav-link">Inbox</a>
                </li>
                <li className="nav-item">
                  <a href="pages/email/read.html" className="nav-link">Read</a>
                </li>
                <li className="nav-item">
                  <a href="pages/email/compose.html" className="nav-link">Compose</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="pages/apps/chat.html" className="nav-link">
              <Icon.MessageSquare className="link-icon" /><span className="link-title">Chat</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/apps/calendar.html" className="nav-link">
              <Icon.Calendar className="link-icon" /><span className="link-title">Calendar</span>
            </a>
          </li>
          <li className="nav-item nav-category">Components</li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
              <Icon.Feather className="link-icon" /><span className="link-title">UI Kit</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="uiComponents">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="accordion.html" className="nav-link">Accordion</a>
                </li>
                <li className="nav-item">
                  <a href="alerts.html" className="nav-link">Alerts</a>
                </li>
                <li className="nav-item">
                  <a href="badges.html" className="nav-link">Badges</a>
                </li>
                <li className="nav-item">
                  <a href="breadcrumbs.html" className="nav-link">Breadcrumbs</a>
                </li>
                <li className="nav-item">
                  <a href="buttons.html" className="nav-link">Buttons</a>
                </li>
                <li className="nav-item">
                  <a href="button-group.html" className="nav-link">Button group</a>
                </li>
                <li className="nav-item">
                  <a href="cards.html" className="nav-link">Cards</a>
                </li>
                <li className="nav-item">
                  <a href="carousel.html" className="nav-link">Carousel</a>
                </li>
                <li className="nav-item">
                  <a href="collapse.html" className="nav-link">Collapse</a>
                </li>
                <li className="nav-item">
                  <a href="dropdowns.html" className="nav-link">Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a href="list-group.html" className="nav-link">List group</a>
                </li>
                <li className="nav-item">
                  <a href="media-object.html" className="nav-link">Media object</a>
                </li>
                <li className="nav-item">
                  <a href="modal.html" className="nav-link">Modal</a>
                </li>
                <li className="nav-item">
                  <a href="navs.html" className="nav-link">Navs</a>
                </li>
                <li className="nav-item">
                  <a href="navbar.html" className="nav-link">Navbar</a>
                </li>
                <li className="nav-item">
                  <a href="pagination.html" className="nav-link">Pagination</a>
                </li>
                <li className="nav-item">
                  <a href="popover.html" className="nav-link">Popovers</a>
                </li>
                <li className="nav-item">
                  <a href="progress.html" className="nav-link">Progress</a>
                </li>
                <li className="nav-item">
                  <a href="scrollbar.html" className="nav-link">Scrollbar</a>
                </li>
                <li className="nav-item">
                  <a href="scrollspy.html" className="nav-link">Scrollspy</a>
                </li>
                <li className="nav-item">
                  <a href="spinners.html" className="nav-link">Spinners</a>
                </li>
                <li className="nav-item">
                  <a href="tabs.html" className="nav-link">Tabs</a>
                </li>
                <li className="nav-item">
                  <a href="tooltips.html" className="nav-link">Tooltips</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
              <Icon.Anchor className="link-icon" /><span className="link-title">Advanced UI</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="advancedUI">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/advanced-ui/cropper.html" className="nav-link">Cropper</a>
                </li>
                <li className="nav-item">
                  <a href="pages/advanced-ui/owl-carousel.html" className="nav-link">Owl carousel</a>
                </li>
                <li className="nav-item">
                  <a href="pages/advanced-ui/sortablejs.html" className="nav-link">SortableJs</a>
                </li>
                <li className="nav-item">
                  <a href="pages/advanced-ui/sweet-alert.html" className="nav-link">Sweet Alert</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
              <Icon.Inbox className="link-icon" /><span className="link-title">Forms</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="forms">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/forms/basic-elements.html" className="nav-link">Basic Elements</a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/advanced-elements.html" className="nav-link">Advanced Elements</a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/editors.html" className="nav-link">Editors</a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/wizard.html" className="nav-link">Wizard</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
              <Icon.PieChart className="link-icon" /><span className="link-title">Charts</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/charts/apex.html" className="nav-link">Apex</a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">ChartJs</a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">Flot</a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/peity.html" className="nav-link">Peity</a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/sparkline.html" className="nav-link">Sparkline</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
              <Icon.Layout className="link-icon" /><span className="link-title">Table</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/tables/basic-table.html" className="nav-link">Basic Tables</a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data-table.html" className="nav-link">Data Table</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
              <Icon.Smile className="link-icon" /><span className="link-title">Icons</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/icons/feather-icons.html" className="nav-link">Feather Icons</a>
                </li>
                <li className="nav-item">
                  <a href="pages/icons/flag-icons.html" className="nav-link">Flag Icons</a>
                </li>
                <li className="nav-item">
                  <a href="pages/icons/mdi-icons.html" className="nav-link">Mdi Icons</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Pages</li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
              <Icon.Book className="link-icon" /><span className="link-title">Special pages</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="general-pages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/general/blank-page.html" className="nav-link">Blank page</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/faq.html" className="nav-link">Faq</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/invoice.html" className="nav-link">Invoice</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/profile.html" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/pricing.html" className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/timeline.html" className="nav-link">Timeline</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
              <Icon.Unlock className="link-icon" /><span className="link-title">Authentication</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="authPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/auth/login.html" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="pages/auth/register.html" className="nav-link">Register</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
              <Icon.CloudOff className="link-icon" /><span className="link-title">Error</span><Icon.ChevronDown className="link-icon" />
            </a>
            <div className="collapse" id="errorPages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/error/404.html" className="nav-link">404</a>
                </li>
                <li className="nav-item">
                  <a href="pages/error/500.html" className="nav-link">500</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Docs</li>
          <li className="nav-item">
            <a href="https://www.nobleui.com/html/documentation/docs.html" target="_blank" className="nav-link">
              <Icon.Hash className="link-icon" /><span className="link-title">Documentation</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
