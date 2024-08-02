import LogoImage from "@/assets/images/ai_logo.png";
export function HeaderLogo() {
    return (
        <div className="header-logo">
            <img src={LogoImage} alt="AI Policy Tracker" className="w-full h-full" />
        </div>
    );
}
