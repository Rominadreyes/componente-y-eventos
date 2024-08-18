const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <>
            <div className="navbarDiv">
                <p>Pizzería Mamma Mia!</p>

                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Home
                </button>
                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Profile
                </button>
                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Logout
                </button>
                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Login
                </button>
                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Register
                </button>
                <button type="button" className="btn btn-dark" aria-label="Left Align">
                    <span className="fa fa-fone" aria-hidden="true"></span>Total: $
                </button>
            </div>
        </>
    )
}

export default Navbar