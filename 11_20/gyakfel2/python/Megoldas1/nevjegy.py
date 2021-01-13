nev = input('Írd be a neved!')
tszam = input('Kérem a telefonszamodat!')
cim = input('Szükségem van a lakcímedre is!')

print('========================================')
print('||                                    ||')
hossz = len(nev)
tolto = '                                        '
tolto.replace(' ','',35-len)

print('   '+ nev + tolto+ '||') 
print('||                                    ||')
hossz = len(tszam)
tolto = '*'
tolto.replace('*',' ',35-len)
print('   '+ tszam + tolto+ '||') 
print('||                                    ||')
hossz = len(cim)
tolto = '*'
tolto.replace('*',' ',35-len)
print('   '+ cim + tolto+ '||') 
print('||                                    ||')
print('========================================')         