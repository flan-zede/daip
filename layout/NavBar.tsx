import * as Icon from 'react-feather'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  const { data: session, data: loading } = useSession()

  return (
    <nav className="navbar">
      <Link href="#" className="sidebar-toggler"><Icon.Menu /></Link>
      <div className="navbar-content">
        <form className="search-form">
          <div className="input-group">
            <div className="input-group-text"><Icon.Search className="icon-sm" /></div>
            <input type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="flag-icon flag-icon-fr mt-1" title="fr"></i> <span className="ms-1 me-1 d-none d-md-inline-block">English</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="languageDropdown">
              <Link href="#" className="dropdown-item py-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr"></i> <span className="ms-1"> French </span></Link>
              <Link href="#" className="dropdown-item py-2"><i className="flag-icon flag-icon-de" title="de" id="de"></i> <span className="ms-1"> German </span></Link>
              <Link href="#" className="dropdown-item py-2"><i className="flag-icon flag-icon-pt" title="pt" id="pt"></i> <span className="ms-1"> Portuguese </span></Link>
              <Link href="#" className="dropdown-item py-2"><i className="flag-icon flag-icon-es" title="es" id="es"></i> <span className="ms-1"> Spanish </span></Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Icon.Grid />
            </Link>
            <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p className="mb-0 fw-bold">Web Apps</p>
                <Link href="#" className="text-muted">Edit</Link>
              </div>
              <div className="row g-0 p-1">
                <div className="col-3 text-center">
                  <Link href="pages/apps/chat.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="message-square" className="icon-lg mb-1"></i><p className="tx-12">Chat</p></Link>
                </div>
                <div className="col-3 text-center">
                  <Link href="pages/apps/calendar.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="calendar" className="icon-lg mb-1"></i><p className="tx-12">Calendar</p></Link>
                </div>
                <div className="col-3 text-center">
                  <Link href="pages/email/inbox.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="mail" className="icon-lg mb-1"></i><p className="tx-12">Email</p></Link>
                </div>
                <div className="col-3 text-center">
                  <Link href="pages/general/profile.html" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="instagram" className="icon-lg mb-1"></i><p className="tx-12">Profile</p></Link>
                </div>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <Link href="#">View all</Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Icon.Mail/>
            </Link>
            <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>9 New Messages</p>
                <Link href="#" className="text-muted">Clear all</Link>
              </div>
              <div className="p-1">
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face2.jpg" alt="user" />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Leonardo Payne</p>
                      <p className="tx-12 text-muted">Project status</p>
                    </div>
                    <p className="tx-12 text-muted">2 min ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face3.jpg" alt="userr" />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Carl Henson</p>
                      <p className="tx-12 text-muted">Client meeting</p>
                    </div>
                    <p className="tx-12 text-muted">30 min ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face4.jpg" alt="userr" />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Jensen Combs</p>
                      <p className="tx-12 text-muted">Project updates</p>
                    </div>
                    <p className="tx-12 text-muted">1 hrs ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face5.jpg" alt="userr" />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Amiah Burton</p>
                      <p className="tx-12 text-muted">Project deatline</p>
                    </div>
                    <p className="tx-12 text-muted">2 hrs ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face6.jpg" alt="userr" />
                  </div>
                  <div className="d-flex justify-content-between flex-grow-1">
                    <div className="me-4">
                      <p>Yaretzi Mayo</p>
                      <p className="tx-12 text-muted">New record</p>
                    </div>
                    <p className="tx-12 text-muted">5 hrs ago</p>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <Link href="#">View all</Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Icon.Bell/>
              <div className="indicator">
                <div className="circle"></div>
              </div>
            </Link>
            <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>6 New Notifications</p>
                <Link href="#" className="text-muted">Clear all</Link>
              </div>
              <div className="p-1">
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <Icon.Gift className="icon-sm text-white" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New Order Recieved</p>
                    <p className="tx-12 text-muted">30 min ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <Icon.AlertCircle className="icon-sm text-white" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Server Limit Reached!</p>
                    <p className="tx-12 text-muted">1 hrs ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face6.jpg" alt="userr" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New customer registered</p>
                    <p className="tx-12 text-muted">2 sec ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                  <Icon.Layers className="icon-sm text-white" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Apps are ready for update</p>
                    <p className="tx-12 text-muted">5 hrs ago</p>
                  </div>
                </Link>
                <Link href="#" className="dropdown-item d-flex align-items-center py-2">
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                  <Icon.Download className="icon-sm text-white" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Download completed</p>
                    <p className="tx-12 text-muted">6 hrs ago</p>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <Link href="#">View all</Link>
              </div>
            </div>
          </li>
          {session &&
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Image className="wd-30 ht-30 rounded-circle" src="/image/faces/face1.jpg" alt="profile" />
              </Link>
              <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
                <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                  <div className="mb-3">
                    <Image className="wd-80 ht-80 rounded-circle" src="/image/faces/face1.jpg" alt="" />
                  </div>
                  <div className="text-center">
                    <p className="tx-16 fw-bolder">{session.user.name}</p>
                    <p className="tx-12 text-muted">{session.user.email}</p>
                  </div>
                </div>
                <ul className="list-unstyled p-1">
                  <li className="dropdown-item py-2">
                    <Link href="pages/general/profile.html" className="text-body ms-0">
                      <Icon.User className="me-2 icon-md" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="dropdown-item py-2">
                    <Link href="#" className="text-body ms-0">
                    <Icon.Edit className="me-2 icon-md" />
                      <span>Edit Profile</span>
                    </Link>
                  </li>
                  <li className="dropdown-item py-2">
                    <Link href="#" className="text-body ms-0">
                      <Icon.Repeat className="me-2 icon-md" />
                      <span>Switch User</span>
                    </Link>
                  </li>
                  <li className="dropdown-item py-2">
                    <Link href="#" className="text-body ms-0" onClick={() => signOut()}>
                    <Icon.LogOut className="me-2 icon-md" />
                      <span>Log Out</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}
