export default function Home (){
  return (
    <div className="main-container">
    <div className="content-container">
      <div className="text-container">
        <h1>Governor Sindh</h1>
        <h2>Kamran Khan Tessori</h2>
        <h3> Certified Cloud  <br />Applied Generative AI <br /> Engineer (GenEng)</h3>
        <h4>Earn up to $5,000 / month</h4>
        <h5>Now admissions are open in <br /> Hyderabad</h5>
        <div className="button-application-container">
            <button>Apply Now</button>
            <h6 className="accepted-applications">
            <span className="bold-count"> 562,143 </span> <br /> Accepted Applications
            </h6>
          </div>
    </div>
    <div className="image-container">
          <img src='giaic.png' alt='Governor Sindh' width={750} height={750} />
          </div>
    </div>
    </div>
  )
}
