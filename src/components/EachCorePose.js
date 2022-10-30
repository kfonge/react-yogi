export default function EachCorePose({ pose }) {
    return (
        <div>
        <img width='300' height='300'src={pose.img_url} alt="image" />
            <h2>English Name: {pose.english_name} Pose</h2>
        </div>
    )
}
