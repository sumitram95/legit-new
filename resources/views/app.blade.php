<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="white">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Meta Tags -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Global Artificial Intelligence (AI) Policy Tracker">
    <meta name="twitter:description"
        content="Stay informed with the latest AI policy insights, updates, and trends. Explore comprehensive resources on AI ethics, legislation, compliance, frameworks, research, development, implementation, and more. Join our community for discussions, workshops, conferences, and collaborations on AI governance and regulations. Get access to policy guidelines, standards, best practices, and strategic roadmaps to navigate the evolving landscape of artificial intelligence policies.">
    <meta name="twitter:image" content="{{ asset('aipolicytracker-logo.jpg') }}">
    <meta name="og:title" content="Global Artificial Intelligence (AI) Policy Tracker">
    <meta name="og:site_name" content="Global Artificial Intelligence (AI) Policy Tracker">
    <meta name="og:type" content="website">
    <meta name="og:description"
        content="Stay informed with the latest AI policy insights, updates, and trends. Explore comprehensive resources on AI ethics, legislation, compliance, frameworks, research, development, implementation, and more. Join our community for discussions, workshops, conferences, and collaborations on AI governance and regulations. Get access to policy guidelines, standards, best practices, and strategic roadmaps to navigate the evolving landscape of artificial intelligence policies.">
    <meta name="og:image" content="{{ asset('aipolicytracker-logo.jpg') }}">
    <meta name="description"
        content="Stay informed with the latest AI policy insights, updates, and trends. Explore comprehensive resources on AI ethics, legislation, compliance, frameworks, research, development, implementation, and more. Join our community for discussions, workshops, conferences, and collaborations on AI governance and regulations. Get access to policy guidelines, standards, best practices, and strategic roadmaps to navigate the evolving landscape of artificial intelligence policies.">
    <meta name="keywords"
        content="AI ethics, AI legislation, AI compliance, AI policy framework, AI policy research, AI policy development, AI policy implementation, AI policy review, AI policy enforcement, AI policy strategy, AI policy roadmap, AI policy guidelines, AI policy standards, AI policy best practices, AI policy recommendations, AI policy white papers, AI policy briefings, AI policy workshops, AI policy conferences, AI policy seminars, AI policy forums, AI policy networks, AI policy partnerships, AI policy collaborations, AI policy initiatives, AI policy programs, AI policy projects, AI policy grants, AI policy funding, AI policy investments, AI policy impact, AI policy outcomes, AI policy metrics, AI policy indicators, AI policy benchmarks, AI policy assessments, AI policy evaluations, AI policy audits, AI policy reviews, AI policy updates">

    <!-- Meta icon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon-16x16.png') }}">

    <title>Global Artificial Intelligence (AI) Policy Status</title>

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
