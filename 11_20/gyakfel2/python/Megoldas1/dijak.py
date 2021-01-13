forrasfajl = open ('dijak.txt','r')

lista = []

for sor in forrasfajl:
    tisztasor= sor.strip
    lista.append(tisztasor)

print(lista)