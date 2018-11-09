<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="Styles.css">
</head>
<body>
<header> Bill Splitter </header>

<p class = "billspositioning">
Bills 
</p>


<div class ="leftcolumn">
  <button id = "billsbtn" class = "sidebtns">
  
  </button>
</div>


<!-- Create bill drop down stuff ------------------------------------------>
<div class="CreateBill">
  <button class="createbillbtn">Create Bill +</button>
  <div class="CreateBill-content">
    <button id="quickID" class ="splitbtns">QuickBill</button>
    <button id="codeID" class ="splitbtns">Code Bill</button>
  </div>
</div>

<!-- Quick split Modal -->
<div id="qmodalID" class="modal">
	<!-- Modal content -->	
  <div class="modal-content">
    <span class="qclose">&times;</span>
	<h3 class = "billtitles"> Quick Split </h3>
    <p>This will become a quick split..</p>
  </div>

</div>
<!-- Code Split Modal -->
<div id="cmodalID" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="cclose">&times;</span>
	<h3 class = "billtitles"> Code Split </h3>
    <p>This will become a code split..</p>
  </div>

</div>

<script src = "codesplit.js"></script>
<script src = "quicksplit.js"></script>
<!-- Create bill drop down stuff ends ------------------------------------>


<div class = "footer">
</div>
</body>
</html>
