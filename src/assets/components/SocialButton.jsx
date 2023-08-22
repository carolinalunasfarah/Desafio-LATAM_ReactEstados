const SocialButton = ({ fbIcon, ghIcon, liIcon }) => {
    return (
        <>
            <article className="iconsContainer">
                <i class={fbIcon}></i>
                <i class={ghIcon}></i>
                <i class={liIcon}></i>
            </article>
        </>
    );
};

export default SocialButton;
