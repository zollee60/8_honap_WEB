darab = int(input('Mekkora legyen a négyszög? (2-10): '))
karakter = input('Milyen karakterrel rajzoljak?: ')
sor = []
for i in range(0, darab, 1):
    for j in range(0, darab, 1):
        sor.append(karakter)
    print(sor)
    sor = []