import EachChestPose from "../components/EachChestPose"

export default function ChestOpeningPoses({Categories}) {
    
    return (
        <div>
            <h1>Chest Opener Poses:</h1>
            {Categories ? (
                Categories.items[3].yoga_poses.map((y) => {
                    return (
                        <EachChestPose key={y.id} pose={y} />
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