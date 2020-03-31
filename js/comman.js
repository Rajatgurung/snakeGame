function getDistance(obj, obj2) {
  var a = obj.x - obj2.x;
  var b = obj.y - obj2.y;

  var c = Math.hypot(a, b);
  return c;
}
