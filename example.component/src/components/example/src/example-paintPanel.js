/**
 * Paint panel.
 */

Example.PaintPanel = function (containerId) {
    this.containerId = containerId;
};

Example.PaintPanel.prototype = {

    init: function () {
        this._initMarkup(this.containerId);
    },

    _initMarkup: function (containerId) {
        var container = $('#' + containerId);
var self = this;
        container.append('<div class="sc-no-default-cmd">Найти рецепт подходящий для приготовления в выбраное время суток</div>');
        container.append('<button id="findRecipe" type="button">Найти рецепт</button>');
	container.append('<select id="comboboxTime"><option value="concept_morning">утро</option><option value="concept_afternoon">день</option><option value="concept_night">ночь</option></select>');
	container.append('<div class="sc-no-default-cmd">Кулинарные опции</div>');
        container.append('<button id="newButton" type="button">Заменить ингридиент на альтернативный</button>');

        $('#findRecipe').click(function () {
			self._findByTime();
		});
  $('#newButton').click(function () {
			self._showMainMenuNode();
		});
    },

   _findByTime: function () {

		var e = document.getElementById("comboboxTime");
		
		var strUser = e.options[e.selectedIndex].value;
		console.log(strUser);
		var addr;
		// Resolve sc-addr. Get sc-addr of ui_main_menu node
		SCWeb.core.Server.resolveScAddr([strUser], function (keynodes) {
			addr = keynodes[strUser];
			// Resolve sc-addr of ui_menu_view_full_semantic_neighborhood node
			SCWeb.core.Server.resolveScAddr(["ui_menu_file_for_searching_the_most_relevant_key_element"],
			function (data) {
				// Get command of ui_menu_view_full_semantic_neighborhood
				var cmd = data["ui_menu_file_for_searching_the_most_relevant_key_element"];
				// Simulate click on ui_menu_view_full_semantic_neighborhood button
				SCWeb.core.Main.doCommand(cmd,
				[addr], function (result) {
					// waiting for result
					if (result.question != undefined) {
						// append in history
						SCWeb.ui.WindowManager.appendHistoryItem(result.question);
					}
				});
			});
		});
	},
_showMainMenuNode: function () {
			SCWeb.core.Server.resolveScAddr(["ui_menu_find_alternatives"],
			function (data) {
				// Get command of ui_menu_view_full_semantic_neighborhood
				var cmd = data["ui_menu_find_alternatives"];
				// Simulate click on ui_menu_view_full_semantic_neighborhood button
				SCWeb.core.Main.doCommand(cmd,
				[SCWeb.core.Arguments._arguments[0]], function (result) {
					// waiting for result
					if (result.question != undefined) {
						// append in history
						SCWeb.ui.WindowManager.appendHistoryItem(result.question);
					}
				});
			});
	}
};
