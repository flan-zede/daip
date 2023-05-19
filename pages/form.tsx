export default function Form() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-title">Basic Form</h6>

                            <form className="forms-sample">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1" autoComplete="off" placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off" placeholder="Password" />
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" >
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <h6 className="card-title">Horizontal Form</h6>

                            <form className="forms-sample">
                                <div className="row mb-3">
                                    <label className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="exampleInputEmail2" autoComplete="off" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-3 col-form-label">Mobile</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="off" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label">
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary me-2">Submit</button>
                                <button className="btn btn-secondary">Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Inputs</h6>
                            <form>

                                <div className="mb-3">
                                    <label className="form-label">Text Input</label>
                                    <input type="text" className="form-control" id="exampleInputText1" value="Amiah Burton" placeholder="Enter Name" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Input</label>
                                    <input type="email" className="form-control" id="exampleInputEmail3" value="amiahburton@gmail.com" placeholder="Enter Email" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Number Input</label>
                                    <input type="number" className="form-control" id="exampleInputNumber1" value="6473786" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password Input</label>
                                    <input type="password" className="form-control" id="exampleInputPassword3" value="amiahburton" placeholder="Enter Password" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Disabled Input</label>
                                    <input type="text" className="form-control" id="exampleInputDisabled1" disabled value="Amiah Burton" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Placeholder</label>
                                    <input type="text" className="form-control" id="exampleInputPlaceholder" placeholder="Enter Your Name" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Readonly</label>
                                    <input type="text" className="form-control" id="exampleInputReadonly" readOnly value="Amiah Burton" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Select Input</label>
                                    <select className="form-select" id="exampleFormControlSelect1">
                                        <option selected disabled>Select your age</option>
                                        <option>12-18</option>
                                        <option>18-22</option>
                                        <option>22-30</option>
                                        <option>30-60</option>
                                        <option>Above 60</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Example multiple select</label>
                                    <select multiple className="form-select" id="exampleFormControlSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Range Input</label>
                                    <input type="range" className="form-range" id="formRange1" />
                                </div>

                                <div className="mb-4">
                                    <div className="form-check mb-2">
                                        <input type="checkbox" className="form-check-input" id="checkDefault" />
                                        <label className="form-check-label">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="checkbox" className="form-check-input" id="checkChecked" checked />
                                        <label className="form-check-label">
                                            Checked
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="checkbox" className="form-check-input" id="checkDisabled" disabled />
                                        <label className="form-check-label">
                                            Disabled checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkCheckedDisabled" disabled checked />
                                        <label className="form-check-label">
                                            Disabled checked
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" className="form-check-input" id="checkInline" />
                                        <label className="form-check-label">
                                            Inline checkbox
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" className="form-check-input" id="checkInlineChecked" checked />
                                        <label className="form-check-label">
                                            Checked
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" className="form-check-input" id="checkInlineDisabled" disabled />
                                        <label className="form-check-label">
                                            Inline disabled checkbox
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" className="form-check-input" id="checkInlineCheckedDisabled" disabled checked />
                                        <label className="form-check-label">
                                            Disabled checked
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" name="radioDefault" id="radioDefault" />
                                        <label className="form-check-label">
                                            Default
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" name="radioDefault" id="radioDefault1" />
                                        <label className="form-check-label">
                                            Default
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" name="radioSelected" id="radioSelected" checked />
                                        <label className="form-check-label">
                                            Selected
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" name="radioDisabled" id="radioDisabled" disabled />
                                        <label className="form-check-label">
                                            Disabled
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="radioSelectedDisabled" id="radioSelectedDisabled" disabled checked />
                                        <label className="form-check-label">
                                            Selected and disabled
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="radioInline" id="radioInline" />
                                        <label className="form-check-label">
                                            Default
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="radioInline" id="radioInline1" />
                                        <label className="form-check-label">
                                            Default
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="radioInlineSelected" id="radioInlineSelected" checked />
                                        <label className="form-check-label">
                                            Selected
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="radioInlineDisabled" id="radioInlineDisabled" disabled />
                                        <label className="form-check-label">
                                            Disabled
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" name="radioInlineSelectedDisabled" id="radioInlineSelectedDisabled" disabled checked />
                                        <label className="form-check-label">
                                            Selected and disabled
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check form-switch mb-2">
                                        <input type="checkbox" className="form-check-input" id="formSwitch1" />
                                        <label className="form-check-label">Toggle this switch element</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input type="checkbox" className="form-check-input" disabled id="formSwitch2" />
                                        <label className="form-check-label">Disabled switch element</label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">File upload</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>

                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Input Size</h6>
                            <p className="mb-3">Use class <code>.form-control-lg</code> or <code>.form-control-sm</code></p>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Small</label>
                                    <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="form-control-sm" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Default</label>
                                    <input type="email" className="form-control" id="colFormLabel" placeholder="form-control" />
                                </div>
                                <div>
                                    <label className="form-label">Large</label>
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="form-control-lg" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Select Size</h6>
                            <p className="mb-3">Use class <code>.form-select-lg</code> or <code>.form-select-sm</code></p>
                            <div className="mb-3">
                                <label className="form-label">Small</label>
                                <select className="form-select form-select-sm mb-3">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Default</label>
                                <select className="form-select mb-3">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label">Large</label>
                                <select className="form-select form-select-lg">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Form Grid</h6>
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="Enter first name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="mb-3">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder="Enter city" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="mb-3">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control" placeholder="Enter state" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="mb-3">
                                            <label className="form-label">Zip</label>
                                            <input type="text" className="form-control" placeholder="Enter zip code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" autoComplete="off" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button type="button" className="btn btn-primary submit">Submit form</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}