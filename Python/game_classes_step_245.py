

class Board_game:   #declare parent board game class
    title = '<<Game Title>>'    #declare title variable
    genre = '<<Game Genre>>'    #declare genre variable
    publisher  = '<<Game Publisher>>'   #Publisher variable
    rec_age = 'Fun for all ages'        #recommended age

    def getTitle(self):
        title = input("/nPlease enter the title of the game: ") #prompt user for title

class Hobby_Game(Board_game): #declare more specific board game sub-type
    game_type = '<<Thematic/Euro/War/Other>>' #major types of Hobby games
    no_of_expansions = '0'  #set number of expansions available

    title = title + ' ({})'.format(game_type) #concatenates the game type to the title

class Mainstream(Board_game):   #another more specific board game type
    pub_date = 1900             #set publishing date
    best_seller = True          #set best seller status

    title = title + ' (Published {})'.format(pub_date) #concatenates the published date to the game title.
    
    
    
    
