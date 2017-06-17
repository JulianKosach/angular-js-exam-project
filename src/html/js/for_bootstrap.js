function openModal(e, _this) {
	e.stopPropagation();
	_this = _this || this;
	var modal = $(_this).data('modal');
	$(modal).modal('show');
};

$('.open-modal').click(function(e){
	openModal(e, this);
});