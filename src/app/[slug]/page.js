import Image  from "next/image";
import styles from './style.module.scss';

const BlogDetails = () => (
  <div className="container pb-80">
    <div className="row mb-50">
        <div className="col col_9">
             <div className={` h6 mb-20 c-orange`} >Product </div>
             <h2 mb-50>Header</h2>
        </div>
    </div>

    <Image className={`${styles.featuredImage} mb-50 `}src="/B.jpg" alt="thumbnail"  width={1280} height={720} /> 

    <div className="row mb-50">
        <div className="col col_9">
            <p>paragraph</p>
            <p>paragraph</p>
            <p>paragraph</p>
            
            </div>
            </div>
 
 </div>
);

export default BlogDetails;
