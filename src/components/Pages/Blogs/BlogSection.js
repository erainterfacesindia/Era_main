import React from 'react'
import Wrapper from '../../UI/Wrapper'
import './blogs.css'
import Badge from 'react-bootstrap/Badge'


const BlogSection = () => {
  return (
    <div class="p-3s bg-black text-white">
    <div class="container bootstrap snippets bootdey">
    <div class="row">
  <h2 class="headline py-3">
  <Badge bg="danger">Blogs</Badge>
                <span class="underline"></span>
              </h2>
    <div class="col-md-12">
        <a href="/blogposts/blog1" class="widget widget-image">
            <div>
                <img src="/recruitment1.jpg" style={{height:"500px",width:"100%",objectFit:"cover"}} alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
  
     
    <div class="row">
  <h2 class="headline py-3">
                Recent Blogs
                <span class="underline"></span>
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/blogposts/blog2" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/blogposts/blog3" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/blogposts/blog4" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
  </div>
</div>
</div>
  
  
      )
  }
  
export default BlogSection
