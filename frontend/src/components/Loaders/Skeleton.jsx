import { SkeletonElement } from './SkeletonElement'
import './Skeleton.css'
const Skeleton = ({theme}) => {
const themeClass = theme || 'light'
return(            <div className="content">
                <div className="articles">
                        <div className= {`skeleton-wrapper ${themeClass}`}>
                            <div className='skeleton-article'>
                                <SkeletonElement type={'option'} />
                                <SkeletonElement type={'text'} />
                                <SkeletonElement type={'text'} />

                                <SkeletonElement type={'text'} />
 <SkeletonElement type={'title'} />
<SkeletonElement type={'title'} /><SkeletonElement type={'title'} />
<SkeletonElement type={'title'} />  
<div className="btnContainer">
<SkeletonElement type={'btn'} /><SkeletonElement type={'btn'} /> </div>                        </div>
                            <div className="shimmer-wrapper">
                                <div className="shimmer"></div>
                            </div>
                        </div>
    
                </div>
                
            </div>)
}

export default Skeleton