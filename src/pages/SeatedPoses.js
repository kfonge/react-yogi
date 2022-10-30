import EachSeatPose from "../components/EachSeatPose"

export default function SeatedPoses({Categories}) {
    
    return (
        <div>
            <h1>Index of Seated Poses :</h1>
            {Categories ? (
                Categories.items[1].yoga_poses.map((y) => {
                    return (
                        <EachSeatPose key={y.id} pose={y} />
                    )
                })
            ) : (
                    (
                        <h1>...Loading</h1>
                    )
            )}
       </div>
    )
}