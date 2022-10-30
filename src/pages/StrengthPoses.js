import EachStrengthPose from "../components/EachStrengthPose"

export default function StrengthPoses({Categories}) {
    
    return (
        <div>
            <h1>Index of Strengthening Poses :</h1>
            {Categories ? (
                Categories.items[2].yoga_poses.map((y) => {
                    return (
                        <div className='pose-container'>
                            <EachStrengthPose key={y.id} pose={y} />
                        </div>
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