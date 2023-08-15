import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>Jinggle</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://dev-supplier-documents.s3.us-east-2.amazonaws.com/supplier-documents/06be9d50-64a0-480c-b618-e94569b6b41a-test.png" alt="" />
                <span>Gaurav</span>
            </div>
            <img src="/settings.svg" alt="" className="icon" />

        </div>
    </div>
  )
}

export default Navbar