tell application "System Events"
	# left  : 123
	# right : 124
	# down  : 125
	# up    : 126
	delay 4
	set textBuffer to "data = {'a': 0,
'b': [[1, 2,>,
[3, 4>>,
'c': 5>

def hello(>:<<
first: bool, second: bool^
if first and second:
raise ValueError('no')
elif first:
print('hello')
elif second:
print('world')
$return 'done'
"
	repeat with i from 1 to count characters of textBuffer
		if (character i of textBuffer = "<") then
			key code 123
		else if (character i of textBuffer = ">") then
			key code 124
		else if (character i of textBuffer = "^") then
			key code 125
			delay 0.25
		else if (character i of textBuffer = "
") then
			keystroke return
			delay 0.25
		else if (character i of textBuffer = "$") then
			keystroke tab using shift down
			delay 0.2
		else
			keystroke (character i of textBuffer)
		end if
		delay 0.08
	end repeat
end tell
