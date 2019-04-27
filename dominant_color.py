def hex_to_rgb(hex):
    rgb = list(int(hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    return rgb

def color_command(rgb):
    color = rgb.index(max(rgb))

    if color == 0:
        command = "play a C sharp note"
    
    if color == 1:
        command = "play a F flat note"
    
    else:
        command = "play an E note"
    
    return command

def main(hex):
    rgb = hex_to_rgb(hex)
    command = color_command(rgb)
    return command

test = "#808000"

print(main(test))