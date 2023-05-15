import BtpList from "@/components/btp/List"
import Link from 'next/link'

export default function Home() {

  return (
    <div className="row">
      <div className="col-12 col-xl-12 stretch-card">
        <div className="row flex-grow-1">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h6 className="card-title mb-0">New Customers</h6>
                  <div className="dropdown mb-2">
                    <Link href="#" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-md-12 col-xl-5">
                    <h3 className="mb-2">3,897</h3>
                    <div className="d-flex align-items-baseline">
                      <p className="text-success">
                        <span>+3.3%</span>
                        <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-12 col-xl-7">
                    <div id="customersChart" className="mt-md-3 mt-xl-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h6 className="card-title mb-0">New Orders</h6>
                  <div className="dropdown mb-2">
                    <Link href="#" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-md-12 col-xl-5">
                    <h3 className="mb-2">35,084</h3>
                    <div className="d-flex align-items-baseline">
                      <p className="text-danger">
                        <span>-2.8%</span>
                        <i data-feather="arrow-down" className="icon-sm mb-1"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-12 col-xl-7">
                    <div id="ordersChart" className="mt-md-3 mt-xl-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h6 className="card-title mb-0">Growth</h6>
                  <div className="dropdown mb-2">
                    <Link href="#" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                      <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-md-12 col-xl-5">
                    <h3 className="mb-2">89.87%</h3>
                    <div className="d-flex align-items-baseline">
                      <p className="text-success">
                        <span>+2.8%</span>
                        <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-12 col-xl-7">
                    <div id="growthChart" className="mt-md-3 mt-xl-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-12 grid-margin stretch-card">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 className="card-title mb-0">Revenue</h6>
              <div className="dropdown">
                <Link href="#" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-md-7">
                <p className="text-muted tx-13 mb-3 mb-md-0">Revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers.</p>
              </div>
              <div className="col-md-5 d-flex justify-content-md-end">
                <div className="btn-group mb-3 mb-md-0" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-outline-primary">Today</button>
                  <button type="button" className="btn btn-outline-primary d-none d-md-block">Week</button>
                  <button type="button" className="btn btn-primary">Month</button>
                  <button type="button" className="btn btn-outline-primary">Year</button>
                </div>
              </div>
            </div>
            <div id="revenueChart" ></div>
          </div>
        </div>
      </div>

      <div className="col-lg-7 col-xl-8 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-baseline mb-2">
              <h6 className="card-title mb-0">Monthly sales</h6>
              <div className="dropdown mb-2">
                <Link href="#" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                </div>
              </div>
            </div>
            <p className="text-muted">Sales are activities related to selling or the number of goods or services sold in a given time period.</p>
            <div id="monthlySalesChart"></div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 col-xl-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-baseline">
              <h6 className="card-title mb-0">Cloud storage</h6>
              <div className="dropdown mb-2">
                <Link href="#" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm me-2"></i> <span className="">View</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm me-2"></i> <span className="">Delete</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm me-2"></i> <span className="">Print</span></Link>
                  <Link className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm me-2"></i> <span className="">Download</span></Link>
                </div>
              </div>
            </div>
            <div id="storageChart"></div>
            <div className="row mb-3">
              <div className="col-6 d-flex justify-content-end">
                <div>
                  <label className="d-flex align-items-center justify-content-end tx-10 text-uppercase fw-bolder">Total storage <span className="p-1 ms-1 rounded-circle bg-secondary"></span></label>
                  <h5 className="fw-bolder mb-0 text-end">8TB</h5>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label className="d-flex align-items-center tx-10 text-uppercase fw-bolder"><span className="p-1 me-1 rounded-circle bg-primary"></span> Used storage</label>
                  <h5 className="fw-bolder mb-0">~5TB</h5>
                </div>
              </div>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary">Upgrade storage</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <BtpList />
          </div>
        </div>
      </div>
    </div>
  )
}
