library webecon;

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Webecon extends StatelessWidget {
  final String name;
  final double size;
  final Color? color;
  final String theme;

  const Webecon({
    super.key,
    required this.name,
    this.size = 24,
    this.color,
    this.theme = 'line',
  });

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(
      'assets/icons/$name.svg',
      package: 'webecon',
      width: size,
      height: size,
      colorFilter: color != null 
          ? ColorFilter.mode(color!, BlendMode.srcIn) 
          : null,
    );
  }

  static Widget icon(String name, {double size = 24, Color? color}) {
    return Webecon(name: name, size: size, color: color);
  }
}
