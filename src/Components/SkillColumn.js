export default function SkillColumn({ title, skills }) {
    const styles = { height: "40px" };

    return (
        <div className="skill-card flex column">
            <h2>{title}</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li className="flex" key={index}>
                        <img src={skill.icon} style={styles} alt={skill.name} />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
