public class GrassHopper {
  public static char score(int s1, int s2, int s3) {
    int score = (s1 + s2 + s3) / 3;
    if (score < 60) return 'E';
    if (score < 70) return 'D';
    if (score < 80) return 'C';
    if (score < 90) return 'B';
    return 'A';
  }
}
