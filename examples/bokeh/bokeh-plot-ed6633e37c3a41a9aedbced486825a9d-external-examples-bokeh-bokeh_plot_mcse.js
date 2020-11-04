(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("8c6c9758-da93-4d02-b020-d16009e5e381");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8c6c9758-da93-4d02-b020-d16009e5e381' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"1fde3c29-4b1f-4114-a34b-041e299f674c":{"roots":{"references":[{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85870"},"ticker":{"id":"85781"}},"id":"85780","type":"LinearAxis"},{"attributes":{"source":{"id":"85853"}},"id":"85857","type":"CDSView"},{"attributes":{},"id":"85768","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85858","type":"Span"},{"attributes":{},"id":"85789","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85875"},"selection_policy":{"id":"85874"}},"id":"85839","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"85780"},"dimension":1,"ticker":null},"id":"85783","type":"Grid"},{"attributes":{"below":[{"id":"85812"}],"center":[{"id":"85815"},{"id":"85819"}],"left":[{"id":"85816"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85856"},{"id":"85858"},{"id":"85859"},{"id":"85860"},{"id":"85863"}],"title":{"id":"85865"},"toolbar":{"id":"85830"},"toolbar_location":null,"x_range":{"id":"85804"},"x_scale":{"id":"85808"},"y_range":{"id":"85806"},"y_scale":{"id":"85810"}},"id":"85803","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85880"},"ticker":{"id":"85813"}},"id":"85812","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"85806","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85882"},"ticker":{"id":"85817"}},"id":"85816","type":"LinearAxis"},{"attributes":{},"id":"85808","type":"LinearScale"},{"attributes":{},"id":"85810","type":"LinearScale"},{"attributes":{"callback":null},"id":"85827","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85887"},"selection_policy":{"id":"85886"}},"id":"85853","type":"ColumnDataSource"},{"attributes":{},"id":"85813","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85861","type":"Dash"},{"attributes":{"axis":{"id":"85812"},"ticker":null},"id":"85815","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85855","type":"Circle"},{"attributes":{},"id":"85882","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85846","type":"Span"},{"attributes":{"data_source":{"id":"85853"},"glyph":{"id":"85854"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85855"},"selection_glyph":null,"view":{"id":"85857"}},"id":"85856","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"85816"},"dimension":1,"ticker":null},"id":"85819","type":"Grid"},{"attributes":{},"id":"85817","type":"BasicTicker"},{"attributes":{},"id":"85870","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"85828"}},"id":"85822","type":"BoxZoomTool"},{"attributes":{},"id":"85821","type":"PanTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85868"},"ticker":{"id":"85777"}},"id":"85776","type":"LinearAxis"},{"attributes":{},"id":"85820","type":"ResetTool"},{"attributes":{},"id":"85826","type":"SaveTool"},{"attributes":{"data_source":{"id":"85839"},"glyph":{"id":"85840"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85841"},"selection_glyph":null,"view":{"id":"85843"}},"id":"85842","type":"GlyphRenderer"},{"attributes":{},"id":"85823","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85829"}},"id":"85824","type":"LassoSelectTool"},{"attributes":{},"id":"85825","type":"UndoTool"},{"attributes":{},"id":"85886","type":"UnionRenderers"},{"attributes":{},"id":"85781","type":"BasicTicker"},{"attributes":{},"id":"85887","type":"Selection"},{"attributes":{"axis":{"id":"85776"},"ticker":null},"id":"85779","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85784"},{"id":"85785"},{"id":"85786"},{"id":"85787"},{"id":"85788"},{"id":"85789"},{"id":"85790"},{"id":"85791"}]},"id":"85794","type":"Toolbar"},{"attributes":{},"id":"85874","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"85791","type":"HoverTool"},{"attributes":{},"id":"85777","type":"BasicTicker"},{"attributes":{},"id":"85875","type":"Selection"},{"attributes":{"overlay":{"id":"85792"}},"id":"85786","type":"BoxZoomTool"},{"attributes":{},"id":"85785","type":"PanTool"},{"attributes":{},"id":"85784","type":"ResetTool"},{"attributes":{},"id":"85790","type":"SaveTool"},{"attributes":{},"id":"85888","type":"UnionRenderers"},{"attributes":{},"id":"85787","type":"WheelZoomTool"},{"attributes":{},"id":"85889","type":"Selection"},{"attributes":{"overlay":{"id":"85793"}},"id":"85788","type":"LassoSelectTool"},{"attributes":{},"id":"85804","type":"DataRange1d"},{"attributes":{"source":{"id":"85839"}},"id":"85843","type":"CDSView"},{"attributes":{},"id":"85876","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"85862"},"glyph":{"id":"85861"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85864"}},"id":"85863","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85844","type":"Span"},{"attributes":{},"id":"85877","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85877"},"selection_policy":{"id":"85876"}},"id":"85848","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85845","type":"Span"},{"attributes":{},"id":"85868","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"85848"},"glyph":{"id":"85847"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85850"}},"id":"85849","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85847","type":"Dash"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85854","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85828","type":"BoxAnnotation"},{"attributes":{"source":{"id":"85848"}},"id":"85850","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85840","type":"Circle"},{"attributes":{"toolbars":[{"id":"85794"},{"id":"85830"}],"tools":[{"id":"85784"},{"id":"85785"},{"id":"85786"},{"id":"85787"},{"id":"85788"},{"id":"85789"},{"id":"85790"},{"id":"85791"},{"id":"85820"},{"id":"85821"},{"id":"85822"},{"id":"85823"},{"id":"85824"},{"id":"85825"},{"id":"85826"},{"id":"85827"}]},"id":"85892","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85841","type":"Circle"},{"attributes":{"text":"tau"},"id":"85851","type":"Title"},{"attributes":{"source":{"id":"85862"}},"id":"85864","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85889"},"selection_policy":{"id":"85888"}},"id":"85862","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85792","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85829","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"85767"},0,0],[{"id":"85803"},0,1]]},"id":"85891","type":"GridBox"},{"attributes":{"end":1,"start":-0.05},"id":"85770","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85860","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85859","type":"Span"},{"attributes":{"children":[{"id":"85893"},{"id":"85891"}]},"id":"85894","type":"Column"},{"attributes":{},"id":"85772","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85793","type":"PolyAnnotation"},{"attributes":{},"id":"85774","type":"LinearScale"},{"attributes":{"below":[{"id":"85776"}],"center":[{"id":"85779"},{"id":"85783"}],"left":[{"id":"85780"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85842"},{"id":"85844"},{"id":"85845"},{"id":"85846"},{"id":"85849"}],"title":{"id":"85851"},"toolbar":{"id":"85794"},"toolbar_location":null,"x_range":{"id":"85768"},"x_scale":{"id":"85772"},"y_range":{"id":"85770"},"y_scale":{"id":"85774"}},"id":"85767","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"85880","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85820"},{"id":"85821"},{"id":"85822"},{"id":"85823"},{"id":"85824"},{"id":"85825"},{"id":"85826"},{"id":"85827"}]},"id":"85830","type":"Toolbar"},{"attributes":{"text":"mu"},"id":"85865","type":"Title"},{"attributes":{"toolbar":{"id":"85892"},"toolbar_location":"above"},"id":"85893","type":"ToolbarBox"}],"root_ids":["85894"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1fde3c29-4b1f-4114-a34b-041e299f674c","root_ids":["85894"],"roots":{"85894":"8c6c9758-da93-4d02-b020-d16009e5e381"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();