import java.util.Random;

public class Roulette {
    private static final String[] colors = {"Czerwony", "Czarny"};
    private static final int[] numbers = {0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
            5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26};

    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(numbers.length);
        int number = numbers[randomNumber];
        String color = getNumberColor(number);

        System.out.println("Wylosowana liczba: " + number);
        System.out.println("Kolor: " + color);
    }

    private static String getNumberColor(int number) {
        if (number == 0) {
            return "Zielony";
        } else {
            return colors[number % 2];
        }
    }
}
