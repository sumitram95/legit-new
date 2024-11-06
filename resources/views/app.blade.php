<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="white">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

 <!-- Meta Tags -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Local e-Governance Information Technology Assessment (LeGIT)">
<meta name="twitter:description"
      content="Explore the IT readiness of Nepal’s local governments with LeGIT. Access insights on digital infrastructure, connectivity, and e-governance progress. Designed to support efficient, inclusive, and data-driven digital transformation.">
<meta name="twitter:image" content="{{ asset('legit-logo.jpg') }}">

<meta name="og:title" content="Local e-Governance IT Readiness Assessment (LeGIT)">
<meta name="og:site_name" content="Local e-Governance IT Readiness Assessment (LeGIT)">
<meta name="og:type" content="website">
<meta name="og:description"
      content="LeGIT provides a comprehensive IT readiness assessment for local governments in Nepal. Track digital infrastructure, ICT training, and e-governance progress to empower digital transformation across Nepal’s municipalities.">
<meta name="og:image" content="{{ asset('legit-thumbnail.jpg') }}">

<meta name="description"
      content="LeGIT is Nepal’s premier platform for assessing the IT readiness of local governments. Gain insights on digital infrastructure, ICT capacity, and connectivity to support inclusive, efficient e-governance. Designed for data-driven transformation, LeGIT helps local governments monitor and improve their digital readiness.">

<meta name="keywords"
      content="Local e-Governance, IT readiness Nepal, e-governance Nepal, digital transformation, ICT assessment, Nepal local government, digital infrastructure, e-governance tools, ICT training, digital readiness index, public sector technology, IT benchmarking, connectivity Nepal, LeGIT">

    <!-- Meta icon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon-app-logo.png') }}">

    <title>Local e-Government Information Technoloy</title>

    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZCLB5DX3K"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-9ZCLB5DX3K');
    </script>
</head>

<body class="Poppins" style="max-width: 1920px; margin-right: auto; margin-left: auto">
    @inertia




    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
</body>

</html>
