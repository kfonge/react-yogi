import EachStrengthPose from "../components/EachStrengthPose"

export default function StrengthPoses({Categories}) {
    
    return (
        <div>
            <h1>Index of Seated Poses :</h1>
            {Categories ? (
                Categories.items[2].yoga_poses.map((y) => {
                    return (
                        <EachStrengthPose key={y.id} pose={y} />
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