type StudentSaysProps = {
    studentSyaImg: string | undefined;
    studentSyaTitle: string | undefined;
    studentSyaText: string | undefined;
};

const StudentSayBox = ({
    studentSyaImg,
    studentSyaTitle,
    studentSyaText,
}: StudentSaysProps) => {
    return (
        <>
            <div className="student-say-box">
                <div className="student-say-img">
                    <img src={studentSyaImg} alt="studentSyaImg" />
                </div>
                <h4>{studentSyaTitle}</h4>
                <p>{studentSyaText}</p>
            </div>
        </>
    );
};
export default StudentSayBox;
