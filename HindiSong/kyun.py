import time
import os

def clear_screen():
    """Clear the terminal screen"""
    os.system('cls' if os.name == 'nt' else 'clear')

def display_lyrics():
    """Display lyrics word by word with smooth effects"""
   
    lyrics = [
        "Main Ab Kyu Hosh Me Aata Nahi",
        "Sukoon Yeh Dil Kyu Paata Nahi",
        "Kyun Todun Khud Se Jo The Waade",
        "Ab Ye Ishq Nibhana Nahi",
        "Main Modun Tumse Jo Yeh Chehra",
        "Dobara Nazar Milana Nahi",
        "Yeh Duniya Jaane Mera Dard",
        "Tujhe Yeh Nazar Kyun Aata Nahi"
    ]
    
   
    start_times = [
        0, 
        2.2,  
        4.5, 
        6.7,  
        9,
        11.4,
        14, 
        16.4
    ]
    
  
    letter_delay = 0.04
    
    clear_screen()
    
    start = time.time()
    

    for i, line in enumerate(lyrics):
      
        elapsed = time.time() - start
        wait_time = start_times[i] - elapsed
        if wait_time > 0:
            time.sleep(wait_time)
        
        for char in line:
            print(char, end="", flush=True)
            time.sleep(letter_delay)
        print() 
    
    print("\n" + "=" * 50)
    print("✨ End of lyrics ✨")

if __name__ == "__main__":
    display_lyrics()