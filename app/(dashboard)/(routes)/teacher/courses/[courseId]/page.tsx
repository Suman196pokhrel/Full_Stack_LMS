import React from 'react'

const CourePage = ({ params }: { params: { courseId: string } }) => {
    return (
        <div>
            Course Id : {params.courseId}
        </div>
    )
}

export default CourePage