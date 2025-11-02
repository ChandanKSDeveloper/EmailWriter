console.log("heeeloefjdnl");


function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]'
    ]

    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
        return null;

    }
}

function findComposeToolbar() {
    const selectors = [
        ".btC",
        '.aDh',
        ' [role="toolbar"]',
        '.gU.Up'
    ]

    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }

    }
    return null;
}

function createAIBtn() {
    const button = document.createElement('div');
    button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3"
    button.style.marginRight = "8px"
    button.innerHTML = 'AI Reply'
    button.style.marginRight = "8px";
    button.style.padding = "0 12px";
    button.style.height = "32px";
    button.style.lineHeight = "32px";
    button.style.borderRadius = "4px";
    button.style.backgroundColor = "#1a73e8";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";
    button.style.fontWeight = "500";

    button.setAttribute('role', "button");
    button.setAttribute("data-tooltip", "generate AI reply");
    return button;

}

function injectAIBtn() {
    const existingBtn = document.querySelector(".ai-reply-btn");
    if (existingBtn) {
        existingBtn.remove();
    }

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("toolbar not found");
        return;

    }

    console.log("toolbar mil gaya");
    const button = createAIBtn();
    if (button) {
        console.log("button create hogaya...");

    }
    button.classList = ".ai-reply-btn"

    button.addEventListener("click", async () => {
        try {
            button.innerHTML = "Generating"
            button.disabled = true;
            const emailContent = getEmailContent();

            const response = await fetch("http://localhost:8080/api/email/generate", {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    emailContent : emailContent,
                    tone : "professional"
                })
            });

            if(!response.ok){
                throw new Error("Api request failed")
            }

            const generatedReply = await response.text();

            console.log(generatedReply);
            
            const composeBox = document.querySelector(
                '[role="textbox"][g_editable="true"]'
            );

            if(composeBox){
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply)
            }

        } catch (error) {

        }
    })

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);

        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]')
                || node.querySelector('.aDh, .btC, [role="dialog"]'))
        )

        if (hasComposeElements) {
            console.log("Compose Elements detected");
            setTimeout(injectAIBtn, 500);

        }
    }
});

observer.observe(document.body, {
    subtree: true,
    childList: true
})