//your JS code here. If required.
.box{
	width: 100px;
	height: 100px;
	background-color: red;
	animation: pulse 1s ease-in-out infinite;
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		
	}

	70% {
		transform: scale(1);
		
	}

	100% {
		transform: scale(0.95);
	
	}
}
}