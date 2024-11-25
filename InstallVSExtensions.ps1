Write-Host "Starting installation of VS Code extensions..."

# List of extensions to install
$extensions = @(
    "anseki.vscode-color",
    "christian-kohler.npm-intellisense",
    "christian-kohler.path-intellisense",
    "codezombiech.gitignore",
    "dbaeumer.vscode-eslint",
    "dsznajder.es7-react-js-snippets",
    "eamodio.gitlens",
    "editorconfig.editorconfig",
    "eg2.vscode-npm-script",
    "equimper.react-native-react-redux",
    "esbenp.prettier-vscode",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-complete-tag",
    "formulahendry.auto-rename-tag",
    "jasonnutter.search-node-modules",
    "lihui.vs-color-picker",
    "mgmcdermott.vscode-language-babel",
    "ms-vsliveshare.vsliveshare",
    "msjsdiag.debugger-for-chrome",
    "naumovs.color-highlight",
    "planbcoding.vscode-react-refactor",
    "redhat.vscode-yaml",
    "robertz.code-snapshot",
    "streetsidesoftware.code-spell-checker",
    "usernamehw.errorlens",
    "vincaslt.highlight-matching-tag",
    "visualstudioexptteam.intellicode-api-usage-examples",
    "visualstudioexptteam.vscodeintellicode",
    "wayou.vscode-todo-highlight",
    "xabikos.javascriptsnippets"
)

$totalExtensions = $extensions.Count
$counter = 1

# Loop through each extension
foreach ($extension in $extensions) {
    # Check if the extension is already installed
    $extensionInstalled = code --list-extensions | Select-String -Pattern $extension

    if ($extensionInstalled) {
        # If already installed, show a success message in green
        Write-Host "[$counter/$totalExtensions] Extension '$extension' is already installed." -ForegroundColor Green
    }
    else {
        # If not installed, attempt to install it
        Write-Host "[$counter/$totalExtensions] Installing '$extension'..."
        try {
            # Attempt installation
            code --install-extension $extension --force 2>$null
            $installCheck = code --list-extensions | Select-String -Pattern $extension

            if ($installCheck) {
                # Show a success message in green
                Write-Host "[$counter/$totalExtensions] '$extension' installed successfully." -ForegroundColor Green
            } else {
                # Show an error message if installation failed
                Write-Host "[$counter/$totalExtensions] Failed to install '$extension'. Extension may not exist." -ForegroundColor Red
            }
        } catch {
            # Handle any unexpected errors
            Write-Host "[$counter/$totalExtensions] Error occurred while installing '$extension'. Extension may not exist or be invalid." -ForegroundColor Red
        }
    }
    # Increment counter for next extension
    $counter++

    # Add a new line for better readability
    Write-Host ""
}

Write-Host "All extensions have been checked and installed!"
Write-Host ""
