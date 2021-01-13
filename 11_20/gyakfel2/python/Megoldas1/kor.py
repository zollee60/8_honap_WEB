kernev = input('Írd be a keresztneved!')
veznev = input('Írd be a vezetékneved!')
szulev = int(input('Melyik évben születtél?'))

print('Kedves '+ kernev)
kor = 2020 - szulev

if kor<18:
    print('Még nem vagy nagykorú! Jó tanulást!')

elif kor<65:
        print("Már nagykorú vagy! Jó munkát!")
else:
        print('Már nyugdíjas korú vagy! Jó pihenést!')
