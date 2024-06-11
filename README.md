# Podstawy aplikacji internetowych

Przedmiot służy jako wprowadzenie do świata aplikacji internetowych. Początkowo studenci zapoznają się z technologiami HTML, CSS i JavaScript. Następnie omawiany będzie protokół HTTP, a także przedstawione zostaną technologie umożliwiające tworzenie aplikacji internetowych w różnych architekturach, począwszy od prostych skryptów, przez architekturę Model-View-Controller, aż po nowoczesne aplikacje typu Single Page Applications.

### O projekcie:

Projekt jest biblioteką książek, gdzie można przeczytać opis książki i napisać recenzje. Jest również możliwość zobaczenia książki na stronie internetowej Amazon.

### Możliwości aplikacji:

* Baza danych jest utworzona w Firebase
* Logowanie i tworzenie konta użytkownika
* Przypomnienie hasła dla zarejestrowanych użytkowników jako powiadomienie
* Sprawdzenie poprawności danych przy logowaniu/rejestracji:
  - Jeśli użytkownik już istnieje i próbuje się zarejestrować pod tym samym loginem, aplikacja poinformuje o tym
  - Jeśli użytkownik wpisał błędne hasło
  - Jeśli nie ma użytkownika o podanym loginie, ale użytkownik próbuje się zalogować
  - Jeśli hasło i potwierdzenie hasła podczas rejestracji nie są takie same
* Tworzenie, edycja i usuwanie recenzji dla każdej książki (jeżeli użytkownik jest zalogowany/zarejestrowany)
* System umożliwia zalogowanym użytkownikom wyświetlanie wszystkich recenzji, które napisali, w postaci listy
* Dodatkowe filtry do wyświetlania recenzji:
  - Można wybierać książki używając ich nazwy
  - Można wybierać książki używając swojej oceny
  - Można wybierać książki używając słów, które były napisane w recenzji
