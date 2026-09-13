class ResistorColor {
  final List<String> colors = <String>[
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
  ];

  int colorCode(String color) => colors.indexOf(color);
}
