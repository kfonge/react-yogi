export default function EachCorePose({ pose }) {
    return (
        <div>
        <img width='300' height='300'src={pose.img_url} alt="image" />
            <h2>  {pose.sanskrit_name} - {pose.english_name} Pose</h2>
            
        </div>
    )
}
