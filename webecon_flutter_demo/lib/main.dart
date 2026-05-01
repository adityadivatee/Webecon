import 'package:flutter/material.dart';
import 'package:webecon/webecon.dart';

void main() {
  runApp(const WebeconDemoApp());
}

class WebeconDemoApp extends StatelessWidget {
  const WebeconDemoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Webecon Flutter Pro',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6366F1),
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const IconBrowserPage(),
    );
  }
}

class IconBrowserPage extends StatefulWidget {
  const IconBrowserPage({super.key});

  @override
  State<IconBrowserPage> createState() => _IconBrowserPageState();
}

class _IconBrowserPageState extends State<IconBrowserPage> {
  final List<String> _featuredIcons = [
    'zap', 'rocket', 'home', 'user', 'settings', 
    'bell', 'heart', 'star', 'search', 'camera',
    'mail', 'phone', 'map', 'calendar', 'clock'
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF0F172A), Color(0xFF1E293B)],
          ),
        ),
        child: CustomScrollView(
          slivers: [
            SliverAppBar.large(
              backgroundColor: Colors.transparent,
              title: const Text(
                'Webecon Pro',
                style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
              ),
              centerTitle: true,
            ),
            SliverPadding(
              padding: const EdgeInsets.all(16),
              sliver: SliverGrid(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  mainAxisSpacing: 16,
                  crossAxisSpacing: 16,
                ),
                delegate: SliverChildBuilderDelegate(
                  (context, index) {
                    final name = _featuredIcons[index];
                    return Container(
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.05),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: Colors.white.withOpacity(0.1)),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Webecon(
                            name: name,
                            size: 40,
                            color: Colors.indigoAccent,
                          ),
                          const SizedBox(height: 8),
                          Text(
                            name,
                            style: const TextStyle(
                              color: Colors.white70,
                              fontSize: 12,
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                  childCount: _featuredIcons.length,
                ),
              ),
            ),
            const SliverToBoxAdapter(
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: 40),
                child: Center(
                  child: Text(
                    '1,031+ Icons Powered by Webecon Engine',
                    style: TextStyle(color: Colors.white38),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
