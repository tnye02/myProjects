

class Board_game:   #declare parent board game class
    title = '<<Game Title>>'    #declare title variable
    genre = '<<Game Genre>>'    #declare genre variable
    publisher  = '<<Game Publisher>>'   #Publisher variable
    rec_age = 'Fun for all ages'        #recommended age

class Hobby_Game(Board_game): #declare more specific board game sub-type
    game_type = '<<Thematic/Euro/War/Other>>' #major types of Hobby games
    no_of_expansions = '0'  #set number of expansions available

class Mainstream(Board_game):   #another more specific board game type
    pub_date = 1900             #set publishing date
    best_seller = True          #set best seller status
    
    
    
    
