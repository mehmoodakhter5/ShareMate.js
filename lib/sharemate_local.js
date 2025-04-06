const socialPlatforms = {
    facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: (url, text = "") => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    linkedin: (url) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
    whatsapp: (url, text = "") => `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`,
    telegram: (url, text = "") => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    email: (url, text = "") => `mailto:?subject=Check this out!&body=${encodeURIComponent(text + " " + url)}`,
    reddit: (url, text = "") => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    pinterest: (url, media = "", description = "") => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`,
    tumblr: (url, text = "") => `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    vk: (url, text = "") => `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    xing: (url) => `https://www.xing.com/spi/shares/new?url=${encodeURIComponent(url)}`,
    sms: (url, text = "") => `sms:?body=${encodeURIComponent(text + " " + url)}`,
    messenger: (url) => `fb-messenger://share/?link=${encodeURIComponent(url)}`,
    viber: (url, text = "") => `viber://forward?text=${encodeURIComponent(text + " " + url)}`,
    copy: (url) => {
        navigator.clipboard.writeText(url).then(() => alert("Link copied!"));
        return "#";
    }
};

const socialIcons = {
    facebook: "fa-brands fa-facebook",
    twitter: "fa-brands fa-twitter",
    linkedin: "fa-brands fa-linkedin",
    whatsapp: "fa-brands fa-whatsapp",
    telegram: "fa-brands fa-telegram",
    email: "fa-solid fa-envelope",
    copy: "fa-solid fa-copy",
    reddit: "fa-brands fa-reddit",
    pinterest: "fa-brands fa-pinterest",
    tumblr: "fa-brands fa-tumblr",
    vk: "fa-brands fa-vk",
    xing: "fa-brands fa-xing",
    sms: "fa-solid fa-comment-dots",
    messenger: "fa-brands fa-facebook-messenger",
    viber: "fa-brands fa-viber"
};


function createShareButton(platform, url, text = "", container) {
    const shareContainer = document.querySelector(container);
    if (!shareContainer) {
        console.error(`Container ${container} not found.`);
        return;
    }

    const button = document.createElement("button");
    button.classList.add("share-btn", `share-${platform}`);

    const icon = document.createElement("i");
    icon.className = socialIcons[platform] || "fa-solid fa-share";

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = platform.charAt(0).toUpperCase() + platform.slice(1);

    button.appendChild(icon);
    button.appendChild(tooltip);

    if (platform === "copy") {
        button.onclick = () => {
            navigator.clipboard.writeText(url).then(() => {
                tooltip.innerText = "Copied!";
                setTimeout(() => (tooltip.innerText = "Copy Link"), 2000);
            }).catch(err => console.error("Failed to copy: ", err));
        };
    } else if (socialPlatforms[platform]) {
        const shareUrl = socialPlatforms[platform](url, text);
        button.onclick = () => window.open(shareUrl, "_blank", "width=600,height=400");
    } else {
        console.error(`Unsupported platform: ${platform}`);
        return;
    }

    shareContainer.appendChild(button);
}
