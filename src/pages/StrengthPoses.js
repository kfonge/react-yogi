import EachStrengthPose from "../components/EachStrengthPose"

export default function StrengthPoses({Categories}) {
    
    return (
        <div className='StrongCards'>
            <h1>Index of Strengthening Poses :</h1>
            {Categories ? (
                Categories.items[2].yoga_poses.map((y) => {
                    return (
                        <div >
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