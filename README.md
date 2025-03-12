# ShareMate

ShareMate is an open-source JavaScript library that allows users to embed social sharing buttons seamlessly into their websites.

## Features

- **Cross-Browser**: Works on all major browsers.
- **Customizable**: Easily customize the appearance and behavior of the sharing buttons.
- **Lightweight**: Minimal footprint for fast loading times.
- **User-Friendly**: Simple and easy

## Installation



### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mehmoodakhter5/ShareMate.js@latest/lib/sharemate.css">
<script src="https://cdn.jsdelivr.net/gh/mehmoodakhter5/ShareMate.js@latest/lib/sharemate.js"></script>
```

## Usage

1. Include ShareMate in your project.
2. Initialize the library with your desired configuration.
3. Add the sharing buttons to your HTML.

```html
<div class="share-buttons">
    <div id="facebook"></div>
    <div id="twitter"></div>
</div>

<script>
     const url = window.location.href, text = "Check this out!";
    ["facebook", "twitter", "linkedin", "whatsapp", "telegram", "email", "copy",'viber'].forEach(platform => {
        const container = document.getElementById(platform);
        if (container) createShareButton(platform, url, text, `#${platform}`);
    });
</script>
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to us at [support@example.com](mailto:support@example.com).
