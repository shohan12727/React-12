import time

def printLyrics():
    lines = [
        ("I wanna da-", 0.297),
        ("I wanna dance in the lights", 1.180),
        ("I wanna ro-", 0.297),
        ("I wanna rock your body", 0.980),
        ("I wanna go", 0.500),
        ("I wanna go for a ride", 0.940),
        ("Hop in the music and", 0.900),
        ("Rock your body", 0.660),
        ("Rock that body", 0.660),
        ("come on, come on", 0.860),
        ("Rock that body", 0.660),
        ("Rock your body", 0.660),
        ("Rock that body", 0.660),
        ("come on, come on", 0.860),
        ("Rock that body", 0.660),
    ]

    for line, delay in lines:
        print(line, flush=True)
        time.sleep(delay)

if __name__ == "__main__":
    printLyrics()
