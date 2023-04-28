import React from "react";
import "../css/About_pol.css";
import Footer from "./Footer";
import Home from "./Home";
function Abt_pol(){
    
    return ( 
        <>
        <Home />
        <div className="abt">
            <div className="abt-head">
                <h1><b>Policy : </b>Phishing Attack</h1>
                <p className=""><b>What is Phishing Attack ?</b></p>
                <p>Phishing is a type of online scam in which attackers attempt to trick individuals into sharing sensitive information, such as passwords, credit card numbers, and other personal data. This is usually done by creating a fake website or email that appears to be from a legitimate organization, such as a bank, social media platform, or online retailer.
                <br />
                Phishing attacks typically involve sending out fraudulent emails that urge recipients to click on a link or download an attachment. The link or attachment may install malware on the victim's device or take them to a fake website that looks like the real one, where they are prompted to enter their login credentials or other personal information.
                <br />
                Phishing attacks can be difficult to spot, as the emails and websites used in these attacks often look very convincing. To avoid falling victim to a phishing scam, it is important to always verify the authenticity of the email or website before entering any sensitive information. This can be done by double-checking the email address, domain name, and security certificate, as well as by contacting the organization directly to confirm the legitimacy of the request.
                </p>
            </div>
            <div className="abt-terms">
                <h1>Terms and conditions</h1>
                <ol>
                    <li><b>Eligibility:</b> The policy will cover individuals or organizations that have been victimized by a phishing attack that results in financial loss, identity theft, or other damages.</li>
                    <li><b>Coverage: </b>The policy will cover the costs associated with repairing the damage caused by the phishing attack, including financial losses, legal fees, and other related expenses.</li>
                    <li><b>Exclusions:</b> The policy will not cover damages caused by other types of cyber attacks, such as malware, ransomware, or denial-of-service attacks. The policy will also not cover damages caused by the intentional or negligent actions of the policyholder.</li>
                    <li><b>Reporting requirements: </b>The policyholder must report any suspected phishing attacks to the insurance provider as soon as possible. Failure to report a phishing attack in a timely manner may result in the denial of coverage.</li>
                    <li><b>Prevention measures:</b> The policyholder must take reasonable precautions to prevent phishing attacks, such as using strong passwords, keeping software up-to-date, and avoiding suspicious emails and websites.</li>
                    <li><b>Deductibles:</b> The policy may include a deductible that the policyholder must pay before coverage kicks in.</li>
                    <li><b>Termination:</b> The policy may be terminated by the policyholder or the insurance provider at any time, subject to any applicable notice requirements and provisions.</li>
                </ol>
                <p>Please note that these are general guidelines only, and the specific terms and conditions of an insurance policy may vary depending on the insurance provider and the type of coverage being offered. It is important to carefully review the policy documents and consult with an insurance professional before purchasing any insurance product.</p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Abt_pol;